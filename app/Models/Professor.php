<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Professor extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'age'];

    public function professor_students(): BelongsToMany{
        return $this->belongsToMany(ProfessorStudent::class);
    }
}
