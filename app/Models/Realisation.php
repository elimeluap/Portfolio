<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Realisation extends Model
{
    use HasFactory;

    // Getter du user à qui appartient les réalisations
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
