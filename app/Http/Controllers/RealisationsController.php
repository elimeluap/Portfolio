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
}
