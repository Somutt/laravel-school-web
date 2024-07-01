<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProfessorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $professors = Professor::all();

        return Inertia::render('ProfessorPage', [
            'professors' => $professors,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|between:10,100|unique:professors,name',
            'age' => 'integer|max:99|min:18'
        ]);

        Professor::create([
            'name' => ucwords($validated['name']),
            'age' => $validated['age'],
            'is_coordinator' => false
        ]);

        return redirect(route('professors.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Professor $professor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Professor $professor): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|between:10,100',
            'age' => 'integer|max:99|min:18'
        ]);

        $professor->update($validated);

        return redirect(route('professors.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Professor $professor): RedirectResponse
    {
        $professor->delete();

        return redirect(route('professors.index'));
    }
}
