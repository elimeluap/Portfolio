<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;

class TagsController extends Controller
{
    /**
     * Return tous les tags au format json
     *
     * @return  json
     */
    public function index()
    {
        return response()->json(Tag::with('realisations')->get());
    }
}
