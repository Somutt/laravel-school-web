<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ClassroomStudentController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'classroom_id' => 'required|exists:classrooms,id',
            'student' => 'required|exists:students,name',
        ]);

        $classroom = Classroom::find($request->classroom_id);
        $student = Student::where('name', $request->student)->first();
        $check = [];

        if ($classroom->students()->count() > 0) {
            foreach ($classroom->students as $classroom_student) {
                array_push($check, $classroom_student->id);
            }

            if (in_array($student->id, $check)) {
                return redirect(route('classrooms.show', $classroom->code));
            }
        }

        $classroom->students()->attach($student->id);

        return redirect(route('classrooms.show', $classroom->code));
    }

    public function destroy(Student $student, Classroom $classroom): RedirectResponse
    {
        $classroom->students()->detach($student->id);

        return redirect(route('classrooms.show', $classroom->code));
    }
}
