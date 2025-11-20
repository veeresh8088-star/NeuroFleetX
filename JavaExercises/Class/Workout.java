package Class;

public class Workout {
    String type;
    int duration;

    void display() {
        System.out.println("Workout Type: " + type);
        System.out.println("Duration: " + duration + " mins");
    }

    public static void main(String[] args) {
        Workout w = new Workout();
        w.type = "Cardio";
        w.duration = 30;
        w.display();
    }
}
