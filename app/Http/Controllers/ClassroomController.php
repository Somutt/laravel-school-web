<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\Professor;
use App\Models\Room;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $professors =  Professor::all();
        $rooms = Room::all();

        $classes = Classroom::all();

        return Inertia::render('ClassesPage', [
            'professors' => $professors,
            'rooms' => $rooms,
            'classes' => $classes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'professor' => 'required',
            'room' => 'required',
            'code' => 'required|string|size:5|regex:/^[A-Za-z0-9]+$/|unique:classrooms,code',
        ]);

        $professor = Professor::where('name', $validated['professor'])->first();
        $room = Room::where('name', $validated['room'])->first();

        dd($validated['code']);

        $classroom = Classroom::create([
            'code' => $validated['code'],
        ]);

        $professor->clasrooms()->save($classroom);
        $room->classrooms()->save($classroom);

        return redirect(route('classes.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Classroom $classroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Classroom $classroom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom)
    {
        //
    }
}
