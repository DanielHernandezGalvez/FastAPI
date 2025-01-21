variable_string = "Hola mundo"
variable_numerica = 35
variable_decimal = 3.1416
variable_boolean = False
variable_vacia = None

print(variable_vacia)
print(variable_boolean)
print(variable_string)
print(variable_decimal)
print(variable_numerica)

variable_string = "nuevo valor"
print(variable_string)

"""
Este es
un comentario
de varias lineas
c:
"""


# CONDICIONALES
""" temperatura = 81
alta = "la temperatura es alta"
viento = 150

if temperatura == 80:
    print("La temperatura es optima")
else:
    print("La temperatura no es optima") """
    
#ELIF
""" if temperatura < 90:
    print(alta)
elif temperatura < 70 & viento != 140:
    print("La temperatura es baja y hay mucho aire")
elif temperatura == 80:
    print("La temperatura es optima") """
    
    

numero_a_evaluar = int(input("ingresa un número"))

if numero_a_evaluar % 2 == 0:
    print("El número es par")
else:
    print("El número es impar") 
    
