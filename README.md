Para rodar o projeto em backend, devem-se fazer algumas configurações iniciais.
Primeiro vamos baixar o que precisamos e depois configurar as variaveis de ambiente
Para o gradle, faça download da versão 8.13 (https://gradle.org/releases/), crie a estrutura de arquivos C:\Gradle --> aqui voce descompacta o zip gradle 8.13 que voce baixou, entao ficaria assim: C:\Gradle\gradle-8.13
É feito dessa foram pois em outros projetos voce pode ter multiplas versões de Gradle, a mesma coisa vale para o Java.
Para configurar a JDK, precisamos ter a versão 17 do Java (https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html), que é o que o Spring Boot usa. Então deve ser feito algo parecido com o que foi feito no gradle, deixando a estrutura de arquivos assim C:\Java\jdk17.0.15_6
Feitos os downloads e configuradas as JDKs, agora tem que configurar as variaveis de ambiente do Windows para apontarem para os locais corretos.
Nas propriedades avançadas do sistema, na aba avançado, o ultimo botão é o das variaveis de ambiente. No segundo bloco, com o label de Variaveis do sistema, clique em "Novo", na caixa que abrir voce vai colocar o nome da variavel como JAVA_HOME e o valor dela como o caminho da sua JDK C:\Java\jdk17.0.15_6
Clique em OK e procure pela variavel Path, edite ela e adicione a variavel que acabamso de criar como %JAVA_HOME%\bin , tambem deve ser adicionado o caminho do gradle C:\Gradle\gradle-8.13\bin
Para verificar se tudo isso funcionou, abra o CMD e digite java --version , e gradle -v

Tendo isso configurado é só abrir o seu VScode e configurar ele para poder rodar o projeto em SpringBoot e Java.
Instale as extensões:
  Extension Pack for Java
  Spring Boot Extension Pack
  Auto Import

Tendo isso instalado, reinicie o VScode, abra o console e digite gradlew clean build --refresh-dependencies , se nao der erros, va na classe DeliveryApplication e rode como projeto Java, agora é só usar os endpoints!
