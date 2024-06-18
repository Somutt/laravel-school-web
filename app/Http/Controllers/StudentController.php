<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $students = Student::all();

        return Inertia::render("StudentPage", [
            'students' => $students,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|between:10,100|unique:students,name',
            'registry' => 'required|between:5,6|regex:/^[0-9]+$/',
            'grade' => 'nullable|string|size:2|regex:/^\d[a-zA-Z]$/',
        ]);

        Student::create($validated);

        return redirect(route('students.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|between:10,100',
            'registry' => 'required|between:5,6|regex:/^[0-9]+$/',
            'grade' => 'nullable|string|size:2|regex:/^\d[a-zA-Z]$/',
        ]);

        $student->update($validated);

        return redirect(route('students.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student): RedirectResponse
    {
        $student->delete();

        return redirect(route('students.index'));
    }
}
