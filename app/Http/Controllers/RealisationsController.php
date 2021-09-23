<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Realisation;
use App\Models\Tag;

class RealisationsController extends Controller
{
    /**
     * Return toutes les réalisations au format json
     *
     * @return  json
     */
    public function index()
    {
        return response()->json(Realisation::with('tags')->get());
    }

    /**
     * Ajout d'une réalisation
     *
     * @param   Request  $request
     *
     * @return  json
     */
    public function add(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'user_id' => 'required'
        ]);

        $realisation = new Realisation;
        $realisation->name = $request->name;
        $realisation->description = $request->description;

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->storeAs('realisations/images', $imageName);
            $request->image->move(public_path('assets/images/realisations'), $imageName);
            $realisation->image = $imageName;
        } else {
            $realisation->image = 'default.jpg';
        }

        $realisation->github_link = $request->github_link;
        $realisation->live_link = $request->live_link;
        $realisation->user_id = $request->user_id;
        $realisation->save();

        $tags = explode(",", $request->get('tags'));
        $tag_ids = [];
        foreach ($tags as $tag) {
            $tag_db = Tag::where('name', trim($tag))->firstOrCreate(['name' => trim($tag)]);
            $tag_ids[] = $tag_db->id;
        }
        $realisation->tags()->attach($tag_ids);

        return response()->json([
            'status_code' => 200,
            'message' => 'Realisation created successfully!'
        ]);
    }

    /**
     * Modification d'une réalisation
     *
     * @param   Request  $request
     *
     * @return  json
     */
    public function edit(Request $request)
    {
        $realisation = Realisation::find($request->id);

        $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'image' => 'nullable',
            'tags' => 'nullable',
            'github_link' => 'nullable',
            'live_link' => 'nullable',
            'user_id' => 'required'
        ]);

        $realisation->name = $request->name;
        $realisation->description = $request->description;

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->storeAs('realisations/images', $imageName);
            $request->image->move(public_path('assets/images/realisations'), $imageName);
            $realisation->image = $imageName;
        }

        $realisation->github_link = $request->github_link;
        $realisation->live_link = $request->live_link;
        $realisation->user_id = $request->user_id;
        $realisation->updated_at = now();
        $realisation->save();

        $tags = explode(",", $request->get('tags'));
        $tag_ids = [];
        foreach ($tags as $tag) {
            $tag_db = Tag::where('name', trim($tag))->firstOrCreate(['name' => trim($tag)]);
            $tag_ids[] = $tag_db->id;
        }
        $realisation->tags()->sync($tag_ids);

        return response()->json([
            'status_code' => 200,
            'message' => 'Realisation updated successfully!'
        ]);
    }

    /**
     * Suppression d'une réalisation
     *
     * @param   Request  $request
     *
     * @return  json
     */
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
