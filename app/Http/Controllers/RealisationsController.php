<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Realisation;

class RealisationsController extends Controller
{
    public function index()
    {
        return response()->json(Realisation::all());
    }

    public function add(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'user_id' => 'required'
        ]);

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->storeAs('realisations/images', $imageName);
            $request->image->move(public_path('assets/images/realisations'), $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        Realisation::create($request->only([
            'name',
            'description',
            'github_link',
            'live_link',
            'user_id'
        ]) +
            ['image' => $imageName]);

        return response()->json([
            'status_code' => 200,
            'message' => 'Realisation created successfully!'
        ]);
    }

    public function edit(Request $request)
    {
        $realisation = Realisation::find($request->id);

        $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'image' => 'nullable',
            'github_link' => 'nullable',
            'live_link' => 'nullable',
            'user_id' => 'required'
        ]);

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->storeAs('realisations/images', $imageName);
            $request->image->move(public_path('assets/images/realisations'), $imageName);
            $realisation->update($request->only([
                'name',
                'description',
                'github_link',
                'live_link',
                'user_id'
            ]) +
                ['image' => $imageName]);
        } else {
            $realisation->update($request->only([
                'name',
                'description',
                'github_link',
                'live_link',
                'user_id'
            ]));
        }

        return response()->json([
            'status_code' => 200,
            'message' => 'Realisation updated successfully!'
        ]);
    }

    public function delete(Request $request)
    {
        $realisation = Realisation::find($request->id);
        $realisation->delete();

        return response()->json([
            'status_code' => 200,
            'message' => 'Realisation deleted successfully!'
        ]);
    }
}
