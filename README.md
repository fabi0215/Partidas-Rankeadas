# Calculadora de Partidas Rankeadas

## Objetivo

Este projeto tem como objetivo desenvolver um sistema para classificar o nivel de vitorias e derrotas de cada jogador, sendo que o nível do jogador é determinado com base no número de vitórias.
sendo classificado desde de Ferro até Imortal conforme o numero de vitorias acumuladas

## Classificação

- Calcula o saldo de vitórias de um jogador com base no número de vitórias e derrotas.
- Determina o nível do jogador com base no saldo de vitórias:
  - Menos de 10 vitórias: **Ferro**
  - Entre 11 e 20 vitórias: **Bronze**
  - Entre 21 e 50 vitórias: **Prata**
  - Entre 51 e 80 vitórias: **Ouro**
  - Entre 81 e 90 vitórias: **Diamante**
  - Entre 91 e 100 vitórias: **Lendário**
  - 101 vitórias ou mais: **Imortal**
- Exibe uma mensagem com o saldo e o nível do jogador.

## Exemplo de Uso

### Entrada

- Quantidade de vitórias
- Quantidade de derrotas

### Saída

```tendo como texto de saida
O Herói {nome_do_herói} tem saldo de {saldo_de_vitórias} e está no nível de {nível}
