package keyvalue;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import keyvalue.service.Command;

public class Main {

    static Scanner scan = new Scanner(System.in);
    static Map<String, Object> KeyValue = new HashMap<String, Object>();
    static String[] method;

    public static Map<String, Object> getKeyValue() {
        return KeyValue;
    }

    public static String[] getArrayInput() {
        return method;
    }

    public static void main(String[] args) throws Exception {

        Map<String, Method> methodMap = new HashMap<String, Method>();
        methodMap.put("get", Command.class.getMethod("commandGet"));
        methodMap.put("put", Command.class.getMethod("commandPut"));
        methodMap.put("keys", Command.class.getMethod("commandGetKeys"));

        KeyValue.put("asdf", "{asdf:fsd}");
        KeyValue.put("dfsd", "{asdf:fsd}");

        while (true) {
            System.out.println("input your action: ");
            method = scan.nextLine().split(" ");
            if (!method[0].equals("exit"))
                methodMap.get(method[0]).invoke(null);
            else
                return;
        }
    }

}