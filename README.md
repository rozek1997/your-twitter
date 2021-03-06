# Your Twitter 

An application that allows you to download information about yours account from the Twitter API and present the results in a friendly, enjoyable way. <br>
Presentation and login to Twitter account is done via web application. 

## The application has been created with use:

- TwitterAPI and Twitter OAuth 1.0
- Spring-boot
- HTML, 
- CSS
- Vanilla JavaScript ES6+
- Twitter4j libraries

## Preview

### Sign-in page
![Sign In page](img/sign_page.PNG)

<p> After successfully logging in to the application, the user is presented with data:</p>
<p>The application allows the user to log in only from the localhost system</p>.
<ul>
<li>to get your information</li>
<li>First and last tweet</li>
<li>cloud of tags from the last X tweets</li>
</ul>
<p>Session access pages are stored for the length of the session, i.e. until the browser is closed. 
The application also allows you to log out.
</p>

## Running applications
To launch applications, in the folder containing the project and pom.xml file

### `mvn clean -D skipTests package spring-boot:run`

## Authorization

Logging in to the application is via Twitter OAuth 1.0. When you click the SignIn button, you will be redirected to the Twitter login page. After correct login, the user will be redirected back to the application.

## Operation

The application uses SpringBoot in two ways.Default endpoint at localhost:8080 respond with HTML page containing login. After successful login the second page of the application available at localhost:8080/info/overview works like a SPA application.  All data display activities take place on client side using code written in Javascript, CSS, HTML, while communication with Spring-a server takes place using REST standard. Communication with Twitter take place in Java code

