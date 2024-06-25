<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Classroom extends Model
{
    use HasFactory;

    protected $fillable = ['professor_id', 'room_id'];

    public function professor(): BelongsTo
    {
        return $this->belongsTo(Professor::class);
    }

    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class);
    }
}
