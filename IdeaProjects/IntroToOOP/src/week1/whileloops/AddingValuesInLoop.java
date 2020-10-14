package week1.whileloops;

import java.util.Scanner;

public class AddingValuesInLoop {
    public static void main(String[] args) {

        System.out.println("I will add up the numbers you give me.");
        Scanner a =new Scanner(System.in);
        int sum = 0;


        while (true){
            System.out.print("\nNumber");
            int num = a.nextInt();
            if(num != 0) {
                sum = sum + num;
                System.out.println("The total so far is " + sum);
            }else if (num ==0){
                System.out.println("The total is " + sum);
                break;
            }

        }




    }


}
