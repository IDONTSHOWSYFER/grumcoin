import json
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

# Charger le fichier JSON
with open('audit_result.json') as json_file:
    data = json.load(json_file)

# Créer un PDF
pdf_file = 'audit_result.pdf'
c = canvas.Canvas(pdf_file, pagesize=letter)
width, height = letter

# Ajouter des données au PDF
y = height - 40  # Position de départ
for key, value in data.items():
    c.drawString(30, y, f"{key}: {value}")  # Écrire chaque clé et valeur
    y -= 20  # Descendre pour la prochaine ligne

c.save()