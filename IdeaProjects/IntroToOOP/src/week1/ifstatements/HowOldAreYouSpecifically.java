package week1.ifstatements;

import java.util.Scanner;

public class HowOldAreYouSpecifically {
    public static void main(String[] args) {
        String name;
        int age;

        Scanner a = new Scanner(System.in);
        System.out.println("Hey, what's your name? (Sorry, I keep forgetting.) ");
        name = a.next();

        System.out.println("Ok,"+ name +", how old are you?");
        age = a.nextInt();
        if (age < 16) {
            System.out.println("You can't drive, " + name + ".");
        }
        else if (age < 18) {
            System.out.println("You can drive but not vote, " + name + ".");
        }
        else if (age < 25) {
            System.out.println("You can vote but not rent a car, " + name + ".");
        }
        else if (age >= 25) {
            System.out.println("You can do pretty much anything, " + name + ".");
        }


    }
}
