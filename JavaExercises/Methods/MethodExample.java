package Methods;

public class MethodExample {

    // Simple method without parameters
    static void greet() {
        System.out.println("Hello! Welcome to Java Methods.");
    }

    // Method with parameters
    static void addNumbers(int a, int b) {
        int sum = a + b;
        System.out.println("Sum: " + sum);
    }

    public static void main(String[] args) {
        greet();             // Calling method without arguments
        addNumbers(10, 20);  // Calling method with arguments
    }
}
