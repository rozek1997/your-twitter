package com.your_twitter.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import twitter4j.Twitter;
import twitter4j.TwitterFactory;

/**
 * Configuration class
 * Register new twitter bean in application context with value parse from application.properties
 */
@Configuration
public class TwitterOauthConfig {


    @Value("${twitter.consumerKey}")
    private String twitterConsumerKey;

    @Value("${twitter.consumerSecret}")
    private String twitterConsumerSecret;

    @Bean
    @Qualifier("myTwitter")
    public Twitter twitterInstanceConfig() {
        TwitterFactory tf = new TwitterFactory();
        Twitter twitter = tf.getInstance();
        twitter.setOAuthConsumer(twitterConsumerKey, twitterConsumerSecret);
        return twitter;
    }
}
