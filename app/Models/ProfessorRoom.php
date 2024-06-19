<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProfessorRoom extends Model
{
    use HasFactory;

    protected $fillable = ['professor_id', 'room_id'];

    public function professors(): HasMany
    {
        return $this->hasMany(Professor::class);
    }

    public function rooms(): HasMany
    {
        return $this->hasMany(Room::class);
    }
}