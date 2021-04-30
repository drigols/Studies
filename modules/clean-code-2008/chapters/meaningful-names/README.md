# Nomes Significativos

# Contents

 - [01 - Usando nomes reveladores de intenção](#01)
 - [02 - Evite desinformação](#02)
 - [03 - Faça distinções informativas](#03)
 - [04 - Usando nomes Pronunciáveis](#04)
 - [05 - Usando nomes pesquisáveis](#05)
 - [06 - Nomes de Classes](#06)
 - [07 - Nomeando Métodos](#07)
 - [08 - Evite usar a mesma palavra para dois propósitos - trocadilho](#08)
 - [09 - Usando os nomes de domínio da solução](#09)
 - [10 - Adicione contexto significativo](#10)

<div id='01'></div>

## 01 - Usando nomes reveladores de intenção

É fácil dizer que os nomes devem revelar a intenção. Escolher bons nomes leva tempo, mas economiza mais do que leva. Portanto, tome cuidado com seus nomes e altere-os quando encontrar nomes melhores. Todos que lerem seu código (incluindo você) ficarão mais felizes.

O nome de uma variável, função ou classe deve responder a todas as grandes questões:
 - Deve dizer porque existe;
 - O que faz;
 - E como é usado.

> ***Se um nome de uma variável, função, ou classe... exigir um comentário, ele não revela sua intenção.***

```java
int d; // tempo decorrido em dias
```

O nome da variável **d** não revela nada. Não evoca uma sensação de tempo decorrido, nem de dias. Devemos escolher um nome que especifique o que está sendo medido e a unidade dessa medida:

```java
int elapsedTimeInDays; 
int daysSinceCreation; 
int daysSinceModification; 
int fileAgeInDays;
```

A escolha de nomes que revelam a intenção pode facilitar muito a compreensão e alteração do código. Qual é o objetivo deste código abaixo?

```java
public List<int[]> getThem() {
  List<int[]> list1 = new ArrayList<int[]>();
  for (int[] x : theList)
    if (x[0] == 4)
      list1.add(x);
  return list1;
}
```

Por que é difícil dizer o que esse código está fazendo? Não há expressões complexas. O espaçamento e o recuo são razoáveis. Existem apenas três variáveis ​​e duas constantes mencionadas. Não existem classes sofisticadas ou métodos polimórficos, apenas uma lista de matrizes (ou pelo menos parece).

O problema não é a simplicidade do código, mas a implicação do código: o grau em que o contexto não é explícito no próprio código. O código exige implicitamente que saibamos as respostas para perguntas como:

 - Que tipos de coisas existem theList?
 - Qual é o significado do subscrito zero de um item theList?
 - Qual é o significado do valor 4?
 - Como eu usaria a lista que está sendo retornada?

As respostas para essas perguntas não estão presentes no exemplo de código, mas poderiam estar. Digamos que estamos trabalhando em um jogo de varredora de minas. Achamos que o quadro é uma lista de células chamadas *theList*. Vamos renomear isso para ***gameBoard***.

Cada célula no quadro é representada por uma matriz simples. Além disso, descobrimos que o *zeroth* subscrito é a localização de um valor de status e que um valor de status 4 significa "sinalizado". Apenas fornecendo nomes a esses conceitos, podemos melhorar o código consideravelmente:

```java
public List<int[]> getFlaggedCells() {
  List<int[]> flaggedCells = new ArrayList<int[]>();
  for (int[] cell : gameBoard)
  if (cell[STATUS_VALUE] == FLAGGED)
    flaggedCells.add(cell);
  return flaggedCells;
}
```

Observe que a simplicidade do código não mudou. Ele ainda possui exatamente o mesmo número de operadores e constantes, com exatamente o mesmo número de níveis de aninhamento. Mas o código se tornou muito mais explícito.

<div id='02'></div>

## 02 - Evite desinformação

Os programadores devem evitar deixar pistas falsas que obscurecem o significado do código. Devemos evitar palavras cujos significados variam de acordo com o significado pretendido. Por exemplo, **hp**, **aixe**, e **sco** seriam nomes de variáveis ​​ruins.

> Porque são os nomes das plataformas ou variantes do Unix.

Mesmo se você estiver codificando uma **hipotenusa** e **hp** parecer uma boa abreviação, mas ela pode ser *desinformativa*.

Não se refira a um agrupamento de contas como um, a **accountList** menos que seja realmente um *List*. A lista de palavras significa algo específico para programadores. Se o contêiner que mantém as contas não for realmente um *List*, isso pode levar a conclusões falsas.

> Assim **accountGroup**, **bunchOfAccounts** ou simplesmente **accounts**  seria melhor.

<div id='03'></div>

## 03 - Faça distinções informativas

Os programadores criam problemas quando escrevem código apenas para satisfazer um *compilador* ou *interpretador*. Por exemplo, como você não pode usar o mesmo nome para se referir a duas coisas diferentes no mesmo escopo, pode ser tentado a alterar um nome de maneira arbitrária. Às vezes, isso é feito com um erro de ortografia, levando a uma situação surpreendente em que a correção de erros de ortografia leva à incapacidade de compilar.

> Considere, por exemplo, a prática realmente hedionda de criar uma variável chamada **klass** apenas porque o nome **class foi usado para outra coisa.

**NOTE:**  
Não é suficiente adicionar séries de números ou palavras de ruído, mesmo que o compilador esteja satisfeito. *Se os nomes devem ser diferentes, eles também devem significar algo diferente*.

**NOTE:**  
A nomeação de séries numéricas **(a1, a2, .. aN)** é o oposto da nomeação intencional. Tais nomes não são desinformativos - *são não informativos*; eles não fornecem nenhuma pista para a intenção do autor. Considerar o código abaixo:

```java
public static void copyChars(char a1[], char a2[]) {
  for (int i = 0; i < a1.length; i++) {
    a2[i] = a1[i];
  }
}
```

Esta função lê muito melhor quando **source** e **destination** é usada para os nomes dos argumentos no lugar de **a1** e **a2**.

Palavras de ruído são outra distinção sem sentido. Imagine que você tem:
 - Uma classe **Product**;
 - Se você tiver outra chamada **ProductInfo**
 - Ou **ProductData**...

> Você fez os nomes diferentes *sem que eles signifiquem algo diferente*. *Info* e *Data* são palavras de ruído indistintas como **a**, **an**, e **the**.

**NOTE:**  
> Observe que não há nada errado em usar convenções de prefixo como **a** e **the** desde que elas façam uma distinção significativa.

Por exemplo, você pode usar **a** para todas as variáveis ​​locais e **the** para todos os argumentos das funções.

> O problema surge quando você decide chamar uma variável **theZork** porque você já tem outra variável chamada **zork**.

**NOTE:**  
As palavras de ruído são redundantes.

 - A palavra **variable** nunca deve aparecer em um nome de variável;
 - A palavra **table** nunca deve aparecer no nome de uma tabela;

Imagine encontrar uma classe nomeada **Customer** e outra nomeada **CustomerObject**. O que você deve entender como distinção? Qual deles representará o melhor caminho para o histórico de pagamentos de um cliente?

Existe uma aplicação que sabemos de onde isso é ilustrado. alteramos os nomes para proteger os culpados, mas aqui está a forma exata do erro:

```java
getActiveAccount (); 
getActiveAccounts (); 
getActiveAccountInfo ();
```

Como os programadores deste projeto devem saber para qual dessas funções chamar?

 - Na ausência de convenções específicas, a variável **moneyAmount** é indistinguível de, **money**;
 - **customerInfo** é indistinguível de, **customer**;
 - **accountData** é indistinguível de **account**;
 - E **theMessage** é indistinguível de **message**...

Distinga os nomes de maneira que o leitor saiba o que as diferenças oferecem.

<div id='04'></div>

## 04 - Usando nomes Pronunciáveis

Os seres humanos são bons em palavras. Uma parte significativa de nosso cérebro é dedicada ao conceito de palavras. E as palavras são, por definição, pronunciáveis. Seria uma pena não levar vantagem dessa enorme porção do nosso cérebro que evoluiu para lidar com a linguagem falada. Portanto, torne seus nomes pronunciáveis.

Se você não pode pronunciá-lo, não pode discuti-lo sem parecer um idiota.

> “Bem, aqui, na abelha, três vezes, temos um xixi zee kyew int, entende?” Isso importa porque a programação é uma atividade social.

Uma empresa que eu conheço possui **genymdhms(data de geração, ano, mês, dia, hora, minuto e segundo)**, então eles andavam por aí dizendo **“gen por que emm dee aich emm ess”**.

Eu tenho o hábito irritante de pronunciar tudo como está escrito, então comecei a dizer **"gen-yah-muddahims"**. Mais tarde, isso foi chamado por vários designers e analistas, e ainda parecíamos tolos. Mas nós estávamos contando a piada, então foi divertido. Divertido ou não, estávamos tolerando uma má nomeação. Os novos desenvolvedores precisavam ter as variáveis ​​explicadas, e depois falavam sobre isso com palavras bobas e inventadas, em vez de usar termos ingleses apropriados.

Veja os códigos abaixo para aprender como resolver esse problema:

```java
class DtaRcrd102 {
  private Date genymdhms;
  private Date modymdhms;
  private final String pszqint = ”102”;
  /* … */
};
```

para..

```java
class Customer {
  private Date generationTimestamp;
  private Date modificationTimestamp;;
  private final String recordId = ”102”;
  /* … */
};
```

Agora é possível uma conversa inteligente:

> “Ei, Mikey, dê uma olhada neste registro! O carimbo de data / hora da geração está definido para a data de amanhã! Como pode ser?"

<div id='05'></div>

## 05 - Usando nomes pesquisáveis

Nomes de letra única e constantes numéricas têm um problema específico, pois não é fácil localizar um corpo de texto.

Pode-se facilmente pesquisar **MAX_CLASSES_PER_STUDENT**, mas o número 7 pode ser mais problemático. As pesquisas podem aumentar o dígito como parte de nomes de arquivos, outras definições constantes e em várias expressões em que o valor é usado com diferentes intenções. É ainda pior quando uma constante é um número longo e alguém pode ter transposto dígitos, criando um bug e evitando a pesquisa do programador.

Da mesma forma, o nome **e** é uma má escolha para qualquer variável pela qual um programador possa precisar procurar. É a letra mais comum no idioma inglês e provavelmente aparece em todas as passagens de texto em todos os programas. Nesse sentido, nomes mais longos superam nomes mais curtos e qualquer nome pesquisável supera uma constante no código.

> Minha preferência pessoal é que nomes de letra única **SÓ** possam ser usados ​​como variáveis ​​locais em métodos curtos.

O comprimento de um nome deve corresponder ao tamanho do seu escopo. Se uma variável ou constante puder ser vista ou usada em vários lugares em um corpo de código, é imperativo atribuir a ela um nome de fácil pesquisa. Vamos ver os códigos abaixo para entender melhor:

```java
for (int j=0; j<34; j++) {
  s += (t[j]*4)/5;
}
```

para...

```java
int realDaysPerIdealDay = 4;
const int WORK_DAYS_PER_WEEK = 5;
int sum = 0;
for (int j=0; j < NUMBER_OF_TASKS; j++) {
  int realTaskDays = taskEstimate[j] * realDaysPerIdealDay;
  int realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK);
  sum += realTaskWeeks;
}
```

Observe que **sum**, acima, não é um nome particularmente útil, mas pelo menos é pesquisável. O código intencionalmente nomeado cria uma função mais longa, mas considere o quão mais fácil será encontrar **WORK_DAYS_PER_WEEK** do que encontrar todos os lugares onde 5 foi usado e filtrar a lista para apenas as instâncias com o significado pretendido.

<div id='06'></div>

## 06 - Nomes de Classes

Classes e objetos devem ter nomes substantivos nominais como:
 - Customer;
 - WikiPage;
 - Account
 - AddressParser...

> Evite palavras como **Manager**, **Processor**, **Data**, ou **Info** em nome de uma classe. ***Um nome de classe não deve ser um verbo***.

<div id='07'></div>

## 07 - Nomeando Métodos

Os métodos devem ter nomes verbais ou de frases verbais, como:
 - postPayment;
 - deletePageou
 - save.

```java
string name = employee.getName();
customer.setName(”mike”);
if (paycheck.isPosted())…
```

Quando os construtores estiverem sobrecarregados, use static factory methods com nomes que descrevam os argumentos. Por exemplo,

<div id='08'></div>

## 08 - Evite usar a mesma palavra para dois propósitos - trocadilho

> Usar o mesmo termo para duas idéias diferentes é essencialmente um trocadilho. Se você seguir a regra ***“uma palavra por conceito”***, poderá acabar com muitas classes que possuem, por exemplo, um método **add**.

Desde que a lista de parâmetros e os valores de retorno dos vários métodos **add** sejam semanticamente equivalentes, tudo estará bem.

<div id='09'></div>

## 09 - Usando os nomes de domínio da solução

Lembre-se de que as pessoas que vão ler o seu código serão programadores. Então vá em frente e use termos de Ciência da Computação (CS), nomes de algoritmos, nomes de padrões, termos de matemática e assim por diante. Não é aconselhável desenhar todos os nomes do domínio do problema, porque não queremos que nossos colegas de trabalho tenham que ir e voltar para o cliente perguntando o que cada nome significa quando já conhecem o conceito por um nome diferente.

O nome **AccountVisitor** significa muito para um programador familiarizado com o padrão **VISITOR**. Que programador não saberia o que **JobQueue** é? Escolher nomes técnicos para essas coisas geralmente é o caminho mais apropriado.

<div id='10'></div>

## 10 - Adicione contexto significativo

Existem alguns nomes que são significativos em si mesmos - a maioria não é. Em vez disso, você precisa colocar nomes em contexto para o seu leitor, colocando-os em classes, funções ou espaços de nomes bem nomeados. Quando tudo mais falhar, pode ser necessário prefixar o nome como último recurso.

Imagine que você tem variáveis nomeadas:
- firstName;
- lastName;
- street;
- houseNumber;
- city;
- state;
- zipcode...

> Em conjunto, é bastante claro que eles formam um endereço. Mas e se você apenas visse a variável **state** sendo usada sozinha em um método? Você inferiria automaticamente que fazia parte de um endereço?

Você pode adicionar contexto usando prefixos:
 - addrFirstName;
 - addrLastName;
 - addrState;
 - É assim por diante...

> Pelo menos os leitores entenderão que essas variáveis ​​fazem parte de uma estrutura maior. Obviamente, uma solução melhor é criar uma classe chamada Address. Então, até o compilador sabe que as variáveis ​​pertencem a um conceito maior.

---

**Rodrigo Leite -** *Software Engineer*
