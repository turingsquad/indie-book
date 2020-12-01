package com.dream.team.indiebook.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MessageResponseVO {
    private String message;

    public MessageResponseVO(String message) {
        this.message = message;
    }

}