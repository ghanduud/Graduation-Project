import json
from django.http import HttpResponse
import cv2
from flask import Response
import numpy as np
from rest_framework.decorators import api_view, authentication_classes, permission_classes

import datetime, time
import os
import numpy as np
from threading import Thread
from .takeAtt import take_attendance


from channels.generic.websocket import AsyncWebsocketConsumer
import base64
from io import BytesIO
from PIL import Image

import cv2
import numpy as np
""" import face_recognition """

class ImageConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        image_data = data['data']
        image = await self.decode_image(image_data)

        # Process the image data using your chosen image processing or face recognition library
        # ...

        # Send a response back to the Vue app with recognized faces or other data
        response = {
            'type': 'faces',
            """ 'data': faces, """
            'timestamp': data['timestamp'],
        }
        await self.send(json.dumps(response))

    async def decode_image(self, image_data):
        image_data = image_data.split(",")[1]
        image_bytes = base64.b64decode(image_data)
        image = Image.open(BytesIO(image_bytes))
        return image
    


@api_view(['POST'])
def upload_image(request):
  
    image_data = request.POST.get('image') 
    roll = request.data.get('roll'),
    print(roll)
    print(len(image_data))
    # Save the image to the server or process it in some other way
    return HttpResponse(status=200)
  



global thisframe

@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def stream_view(request):
    global thisframe
    dataURL = request.body
    # Convert the data URL to a OpenCV image
    img = cv2.imdecode(np.fromstring(dataURL, np.uint8), cv2.IMREAD_COLOR)
    # Do something with the image, such as process it or save it to disk
    # ...
    thisframe = img
    
    return HttpResponse(status=200)


@api_view(['POST'])
def tasks(request):
    global switch,camera
    if request.form.get('click') == 'Capture':
            global capture,this_frame,attended,first_Capture,identefier
            identefier = request.form['identefier']
            # this_frame = detect_face(this_frame)
            now = datetime.datetime.now()
            p = os.path.sep.join(['shots', "shot_{}.png".format(str(now).replace(":",''))])
            cv2.imwrite(p, this_frame)
            try:
                attended = take_attendance(identefier, p)
                os.remove(p)
            except ValueError as e:
                attended = False
                os.remove(p)
            # os.remove(p)
            first_Capture = True
                          
    if(first_Capture & attended):
        camera.release()
        cv2.destroyAllWindows()
        return HttpResponse("lecture.html",id = identefier)
    else:
        return HttpResponse('index.html',wrong = "wrong input try again") 