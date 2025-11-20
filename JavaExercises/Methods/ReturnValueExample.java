package Methods;

public class ReturnValueExample {

    // Method that returns a value
    static int multiply(int x, int y) {
        return x * y;  // returns product
    }

    public static void main(String[] args) {
        int result = multiply(5, 4);
        System.out.println("Multiplication Result: " + result);
    }
}
