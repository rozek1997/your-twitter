package com.your_twitter.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import twitter4j.Status;

@Accessors(chain = true)
@AllArgsConstructor
@Getter
@Setter
public class FirstLastTweets {


    private Status firstTweet;
    private Status lastTweet;
}
