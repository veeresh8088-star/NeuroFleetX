class DatatypeProgram2 {
    public static void main(String[] args) {
        int intVal = 10;
        double doubleVal = intVal; // implicit conversion
        double num = 9.78;
        int intNum = (int) num; // explicit casting

        System.out.println("Integer to Double: " + doubleVal);
        System.out.println("Double to Integer: " + intNum);
    }
}
