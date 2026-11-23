from django.shortcuts import render, redirect
from .models import Student
def home(request):
    students = Student.objects.all()
    return render(request, 'home.html', {
        'students': students
    })

def add_student(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        age = request.POST['age']
        course = request.POST['course']

        Student.objects.create(
            name=name,
            email=email,
            age=age,
            course=course
        )

        return redirect('home')

    return render(request, 'add_student.html')
def delete_student(request, id):
    if request.method == 'POST':
        student = Student.objects.get(id=id)
        student.delete()

    return redirect('home')