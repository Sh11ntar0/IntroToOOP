package week1.keyboardinput;

import java.util.Scanner;

public class NameAgeSalary {
    public static void main(String[] args) {
        String name;
        int age;
        double salary;

        Scanner a = new Scanner(System.in);

        System.out.println("Hello.  What is your name?");
        name = a.next();

        System.out.println( "Hi, " + name + "! How old are you?" );
        age = a.nextInt();

        System.out.println( "So you're " + age + ", eh? That's not old at all!\nHow much do you make, " + name + "?" );
        salary = a.nextDouble();

        System.out.println( salary + "! I hope that's per hour and not per year! LOL!" );
    }
}
