import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> numeros = new ArrayList<>();
        int sumaTotal=0;
        int num=0;

        do{
            System.out.println("Ingresa un numero:");
            num = scanner.nextInt();
            numeros.add(num);
            System.out.println(num);
            System.out.println("Para finalizar ingresa 0");
            sumaTotal+=num;
        }while (num!=0);
        System.out.println("Suma total: "+sumaTotal);
    }
}