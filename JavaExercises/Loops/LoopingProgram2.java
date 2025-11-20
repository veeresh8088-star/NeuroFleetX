package Loops;

public class LoopingProgram2 {
    public static void main(String[] args) {
        int n = 5, fact = 1;
        int i = 1;

        while (i <= n) {
            fact *= i;
            i++;
        }

        System.out.println("Factorial of " + n + " = " + fact);
    }
}
