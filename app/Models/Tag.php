<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    /**
     * Getter des réalisations du tag
     *
     * @return  [type]  [return description]
     */
    public function realisations()
    {
        return $this->belongsToMany('App\Models\Realisation');
    }
}
