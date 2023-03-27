import pandas as pd
import uuid
from datetime import datetime

LENGTH = 8


DUMMIE_DATA = [
    {
        "id": uuid.uuid4(),
        "created_at": datetime.now(),
        "image": f"/images/wallpapers{index}.png"
    } for index, _ in enumerate(range(LENGTH), start=1)
]

df = pd.DataFrame(DUMMIE_DATA)
df.to_csv("simple.csv", index=False)
