package com.flights.model;
import javax.persistence.*;
// TABLAS PARA LA BASE DE DATOS
@Entity
@Table(name = "Text")
public class Text {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id", nullable = false, length = 150)
    private int idText;
    @Column(name = "Body", nullable = false, length = 70)
    private String body;
    @Column(name= "Title", nullable = false, length = 150)
    private String title;
    @Column(name= "categoria", nullable = false, length = 150)
    private String categoria;

    @Column(name= "Threads", nullable = false, length = 150)
    private String threads;

    //@ManyToOne()
    //@JoinColumn(name = "from_passenger_id")
    //private Long id;

    public int getIdText() {
        return idText;
    }
    public void setIdText(int idText) {
        this.idText = idText;
    }

    public String getbody() {
        return body;
    }

    public void setbody(String body) {
        this.body = body;
    }

    public String getThreads() {
        return threads;
    }

    public void setThreads(String threads) {
        this.threads= threads;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    @ManyToOne
    @JoinColumn(name= "user_id")
    Passenger id;
}