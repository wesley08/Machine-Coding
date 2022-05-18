package keyvalue.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.stream.Collectors;

import keyvalue.Main;

public class Command {
    static Scanner scan = new Scanner(System.in);
    static Map<String, Object> KeyValue = Main.getKeyValue();
    static String result = "";

    public static void commandGet() {
        String[] getArrayInput = Main.getArrayInput();
        System.out.println(KeyValue.get(getArrayInput[1]));
    }

    public static void commandPut() {
        String[] getArrayInput = Main.getArrayInput();
        String key = getArrayInput[1];
        HashMap<String, String> value = new HashMap<String, String>();

        for (int i = 2; i < getArrayInput.length; i += 2) {
            value.put(getArrayInput[i], getArrayInput[i + 1]);
        }

        KeyValue.put(key, value);
        System.out.println("success to input your key : " + key);
    }

    public static void commandGetKeys() {
        // System.out.println(KeyValue.keySet().toString());
        result = KeyValue.keySet().stream().collect(Collectors.joining(", "));

        System.out.println(result);
    }

}
