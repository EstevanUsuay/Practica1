## importar pandas
import pandas

from pymongo import MongoClient

# Leer el archivo csv
data = pandas.read_csv(
    'C:\\Users\\estev\\Documents\\GitHub\\PyMongo\\catastros\\SRI_RUC_Galapagos.csv',
    dtype=str,
    sep='|',
    encoding='latin'
)

# imprime los encabezados del archivo csv con su tipo
print(data.dtypes)
print(data.head())

# seleccionar solo las 3 columnas y guardar en selection
selection = data[
    [
        'NUMERO_RUC',
        'RAZON_SOCIAL',
        'NOMBRE_FANTASIA_COMERCIAL'
    ]
]

# en selection_copy guardar la copia de las 3 columnas con un nombre personalizado
# de forma que en la colección de Mongo se utilice esos nuevos nombres de columna
selection_copy = selection.copy()
selection_copy.rename(
    columns={
        'NUMERO_RUC': 'identification',
        'RAZON_SOCIAL': 'name',
        'NOMBRE_FANTASIA_COMERCIAL': 'tradeName'
    },
    inplace=True,
)

print(selection_copy)

# Para guardar los datos a mongo, crear un diccionario de datos (clave:valor)
# convertir selection_copy a diccionario
dictionary = selection_copy.to_dict(orient='records')
print(dictionary)

# Crear la conexión a Mongo (obtener de Mongo), a la bdd y colección establecida
client = MongoClient('mongodb://localhost:27017/') 
db = client['ecuador']
collection = db['galapagos']

# Cargar los datos del diccionario a la BDD en Mongo
collection.insert_many(dictionary)
