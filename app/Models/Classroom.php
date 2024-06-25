<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Classroom extends Model
{
    use HasFactory;

    protected $fillable = ['professor_id', 'room_id'];

    public function professors(): HasOne
    {
        return $this->hasOne(Professor::class);
    }

    public function rooms(): HasOne
    {
        return $this->hasOne(Room::class);
    }
}
