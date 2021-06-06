<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Realisation extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image',
        'github_link',
        'live_link',
        'user_id'
    ];

    /**
     * Getter du user à qui appartient les réalisations
     *
     * @return  [type]  [return description]
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
