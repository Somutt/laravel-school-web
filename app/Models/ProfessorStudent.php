<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProfessorStudent extends Model
{
    use HasFactory;

    protected $fillable = ['professor_id', 'student_id', 'room_id'];

    public function rooms(): BelongsToMany {
        return $this->belongsToMany(Room::class);
    }

    public function students(): BelongsToMany {
        return $this->belongsToMany(Student::class);
    }

    public function professors(): BelongsToMany {
        return $this->belongsToMany(Professor::class);
    }
}
