package week1.keyboardinput;

import java.util.Scanner;

public class AgeInFiveYears {
    public static void main(String[] args) {
        String name;
        int age;


        Scanner a = new Scanner(System.in);

        System.out.println("Hello.  What is your name?");
        name = a.next();

        System.out.println( "Hi, " + name + "! How old are you?" );
        age = a.nextInt();

        System.out.println( "Did you know that in five years you will be " + age + " years old?\nAnd five years ago you were " + (age-5) + "! Imagine that!" );


    }

}
