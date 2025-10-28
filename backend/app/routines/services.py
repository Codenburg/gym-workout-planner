import qrcode
from io import BytesIO
from django.core.files import File


def generate_qr(routine):
    qr_image = qrcode.make(f"https://tugym.com/routine/{routine.id}")
    buffer = BytesIO()
    qr_image.save(buffer, format="PNG")
    routine.qr_code.save(f"qr_{routine.id}.png", File(buffer), save=False)
