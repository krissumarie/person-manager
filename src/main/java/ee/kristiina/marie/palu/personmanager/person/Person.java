package ee.kristiina.marie.palu.personmanager.person;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Person {
    // @Entity indicates that the person is mapped to a table in the database!!

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private LocalDate birthDate;
    private String email;
    private String phone;
    private String gender;

    /**
     *
     * @return id
     */
    public Long getId() {
        return id;
    }

    /**
     *
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     *
     * @return birthday
     */
    public LocalDate getBirthDate() {
        return birthDate;
    }

    /**
     *
     * @return email
     */
    public String getEmail() {
        return email;
    }

    /**
     *
     * @return phone number
     */
    public String getPhone() {
        return phone;
    }

    /**
     *
     * @return gender
     */
    public String getGender() {
        return gender;
    }

    /**
     *
     * @param id id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     *
     * @param name name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     *
     * @param birthDate birthday
     */
    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    /**
     *
     * @param email address
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     *
     * @param phone number
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     *
     * @param gender gender
     */
    public void setGender(String gender) {
        this.gender = gender;
    }
}
