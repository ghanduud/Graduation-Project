import os
from deepface import DeepFace

def take_attendance(id, img):
    threshHold = 0
    # img = preprocess(img)
    rootdir = 'C:\\Users\\omarg\\OneDrive\\Desktop\\FlaskCamera\\students'
    for dir in os.listdir(rootdir):
        if(dir == id):
            d = os.path.join(rootdir, dir)
            for image in os.listdir(d):
                anchor = os.path.join(d, image)
                # anchor = preprocess(anchor)
                # result = siamese_model.predict(list(np.expand_dims([img, anchor], axis=1)))
                result = DeepFace.verify(img1_path = img, img2_path = anchor)
                print(result['verified'])
                if(result['verified'] == True) :
                    threshHold += 1
            
    if (threshHold >= 5):
        return True
    else:
        return False
    



""" print(take_attendance("1","C:\\Users\\omarg\\OneDrive\\Desktop\\FlaskCamera\\shots\\4.png")) """
""" print(DeepFace.verify(img1_path = 'C:\\Users\\LENOVO\\Pictures\\Screenshots\\1.png', img2_path = 'C:\\Users\\LENOVO\\Pictures\\Screenshots\\2.png')) """