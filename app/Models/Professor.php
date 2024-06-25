<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Professor extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'age'];

    public function clasrooms(): HasMany
    {
        return $this->hasMany(Classroom::class);
    }
}
