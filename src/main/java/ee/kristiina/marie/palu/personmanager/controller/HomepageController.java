// New file: HomeController.java
package ee.kristiina.marie.palu.personmanager.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomepageController {

    @GetMapping("/")
    public String welcome() {
        return "<html><body><h1>HIIII 👋</h1></body></html>";
    }
}
