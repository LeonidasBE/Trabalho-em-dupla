# 🛠️ Configuração do Ambiente - Projeto Backend (Spring Boot + Gradle)

Este guia irá te ajudar a configurar o ambiente necessário para rodar o projeto backend com **Java 17**, **Spring Boot** e **Gradle**.

---

## 📥 Requisitos

- Java JDK 17 (Amazon Corretto)
- Gradle 8.13
- Visual Studio Code (ou outro editor compatível)
- Git (opcional, mas recomendado)

---

## 💻 Instruções para Windows

### 1. Baixar e configurar o Gradle

- Acesse: [https://gradle.org/releases/](https://gradle.org/releases/)
- Baixe o **Gradle 8.13 (binary-only zip)**.
- Crie a estrutura de pastas:
  ```
  C:\Gradle
  ```
- Extraia o conteúdo do `.zip` para:
  ```
  C:\Gradle\gradle-8.13
  ```

### 2. Baixar e configurar o Java (JDK 17)

- Acesse: [Amazon Corretto 17 - Downloads](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html)
- Baixe a versão compatível com Windows.
- Crie a pasta:
  ```
  C:\Java\jdk17.0.15_6
  ```
- Extraia os arquivos da JDK para essa pasta.

### 3. Configurar variáveis de ambiente

1. Vá em **Propriedades do Sistema > Avançado > Variáveis de Ambiente**
2. Na seção **Variáveis do sistema**, clique em **Novo**:
   - Nome: `JAVA_HOME`
   - Valor: `C:\Java\jdk17.0.15_6`
3. Ainda em **Variáveis do sistema**, localize e edite `Path`. Adicione:
   ```
   %JAVA_HOME%\bin
   C:\Gradle\gradle-8.13\bin
   ```

### 4. Verificar instalações

Abra o terminal (CMD) e execute:

```bash
java --version
gradle -v
```

Ambos devem retornar as versões instaladas.

---

## 🧩 Configuração do VS Code

Instale as seguintes extensões:

- [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=pivotal.vscode-spring-boot)
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)

Reinicie o VS Code após a instalação.

---

## ▶️ Rodando o Projeto

No terminal (dentro da pasta do projeto), execute:

```bash
./gradlew clean build --refresh-dependencies
```

Se o build for bem-sucedido, localize a classe `DeliveryApplication.java` e execute como **Java Application**.

---

## ✅ Pronto!

Agora o ambiente está configurado e o projeto backend está pronto para rodar. Você já pode começar a usar os endpoints REST.

---
