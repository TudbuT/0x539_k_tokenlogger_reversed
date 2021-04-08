package tudbut;

import de.tudbut.tools.Tools;
import tudbut.net.http.HTTPHeader;
import tudbut.net.http.HTTPRequest;
import tudbut.net.http.HTTPRequestType;
import tudbut.parsing.ArgumentParser;
import tudbut.tools.Lock;

import java.io.IOException;
import java.util.Map;

/***
 * An efficient spammer for fake tokens to run in the background
 */
public class ZeroX539_K_Spammer {
    
    public static void main(String[] argStrings) throws IOException {
        Map<String, String> args = ArgumentParser.parseDefault(argStrings);
        int delay = Integer.parseInt(args.getOrDefault("d", "2000"));
        int amount = Integer.parseInt(args.getOrDefault("a", "500"));
    
        HTTPHeader[] headers = {
                new HTTPHeader("User-Agent", "Java"),
                new HTTPHeader("Accept", "gzip, deflate, br")
        };
        Lock lock = new Lock();
        for (int i = 1 ; i <= amount ; i++) {
            lock.lock(delay);
            String s = token();
            HTTPRequest request = new HTTPRequest(HTTPRequestType.GET, "https://0x539.co", 443, "/k/" + s, headers);
            int finalI = i;
            request.sendKeepAlive(-1).addChangeListener(httpResponse -> System.out.println("Done " + finalI + "!"));
            System.out.println("Sent " + i + "! (" + s + ")");
            lock.waitHere();
        }
    }
    
    public static String token() {
        String s = "N%%%%%%%%%%%%%%%%%%%%%%%.%%%%%%.%%%%%%%%%%%%%%%%%%%%%%%%%%%";
        char[] chars = s.toCharArray();
        for (int i = 0 ; i < chars.length ; i++) {
            if(chars[i] == '%') {
                chars[i] = Tools.randomAlphanumericString(1).charAt(0);
            }
        }
        s = new String(chars);
        return s;
    }
}
