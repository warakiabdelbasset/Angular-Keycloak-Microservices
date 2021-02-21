# Angular-Keycloak-Microservices
Security of Microservices using Keycloak for the part (security, authentication) and Angular for the display part

# Application architecture

<p align="center">
  <img src="https://github.com/warakiabdelbasset/Angular-Keycloak-Microservices/blob/main/img/Untitled.png">
</p>



The system consists of:

• A Spring MVC Front end Web application, Server side which allows you to manage products and suppliers. The products are stored in an H2 database and the suppliers can be accessed remotely in a micro service.

• A Spring Boot Micro Service to manage suppliers

• A Front Web Angular applications allowing to manage suppliers

• The management of products and suppliers is secure for the two Frontend applications, by an SSO authentication system based on Keycloak Server


# Screen Execution

## Product page Angular

<p align="center">
  <img src="https://github.com/warakiabdelbasset/Angular-Keycloak-Microservices/blob/main/img/angular-Prod.PNG">
</p>

## Supplier page Angular

<p align="center">
  <img src="https://github.com/warakiabdelbasset/Angular-Keycloak-Microservices/blob/main/img/angular-Supp.PNG">
</p>

## Keycloak Login page Angular

<p align="center">
  <img src="https://github.com/warakiabdelbasset/Angular-Keycloak-Microservices/blob/main/img/angular-login-keycloak.PNG">
</p>
