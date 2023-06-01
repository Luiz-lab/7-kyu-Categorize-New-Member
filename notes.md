7 kyu
Categorize New Member


DESCRIPTION:

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//

DESCRIÇÃO:

O Western Suburbs Croquet Club tem duas categorias de membros, Senior e Open. Eles gostariam de sua ajuda com um formulário de inscrição que informará aos associados em potencial em qual categoria eles serão colocados.

Para ser um sénior, o membro deve ter pelo menos 55 anos e um handicap superior a 7. Neste clube de croquet, os handicaps variam de -2 a +26; quanto melhor o jogador, menor o handicap.

Entrada

A entrada consistirá em uma lista de pares. Cada par contém informações para um único membro em potencial. As informações consistem em um número inteiro para a idade da pessoa e um número inteiro para a deficiência da pessoa.

Saída

A saída consistirá em uma lista de valores de string (em Haskell e C: Open ou Senior) informando se o respectivo membro deve ser colocado na categoria senior ou open.

Exemplo

entrada = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Aberto", "Aberto", "Sênior", "Aberto", "Aberto", "Sênior"]


Domain:
- Input:
    - a list of pairs 
    - firts is the age and second is the Handicap
- Menbers (Age and Handicap)
    if age >=55 and Handicap>7
    Hadicap range is > -2 and <26
- Result 
    output : "Senior" if the first rule of a menber get done (if age >=55 and Handicap>7)
    else: "Open"
    if the age are under then 10 or handicap out of the range : "invalid information"
