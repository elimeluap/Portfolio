<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $details = [
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        ];

        Mail::to('antoinepe.contact@gmail.com')->send(new ContactMail($details));

        return response()->json([
            'status_code' => 200,
            'message' => 'Mail sent successfully!'
        ]);
    }
}
