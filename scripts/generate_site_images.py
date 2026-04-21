from __future__ import annotations

from dataclasses import dataclass
from io import BytesIO
from pathlib import Path

import requests
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "images"


@dataclass(frozen=True)
class SourceImage:
    name: str
    pexels_id: int

    @property
    def url(self) -> str:
        return (
            f"https://images.pexels.com/photos/{self.pexels_id}/"
            f"pexels-photo-{self.pexels_id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2400"
        )


@dataclass(frozen=True)
class OutputImage:
    filename: str
    source: str
    size: tuple[int, int]
    focus: tuple[float, float] = (0.5, 0.5)


SOURCES = {
    "oil_refinery_night": SourceImage("oil_refinery_night", 10407689),
    "engineers_blueprint": SourceImage("engineers_blueprint", 3862135),
    "engineers_drawing": SourceImage("engineers_drawing", 3861938),
    "engineering_office_team": SourceImage("engineering_office_team", 3912477),
    "professional_meeting": SourceImage("professional_meeting", 7643758),
    "aerial_manufacturing": SourceImage("aerial_manufacturing", 11958396),
    "technical_safety_pipes": SourceImage("technical_safety_pipes", 17109813),
    "qhse_site_engineer": SourceImage("qhse_site_engineer", 36673118),
    "control_room_monitoring": SourceImage("control_room_monitoring", 32845700),
    "saudi_pipeline": SourceImage("saudi_pipeline", 36825977),
    "storage_tanks": SourceImage("storage_tanks", 5411674),
    "air_compressor": SourceImage("air_compressor", 31257317),
    "big_pipeline_platform": SourceImage("big_pipeline_platform", 15340288),
    "gas_pipeline_forest": SourceImage("gas_pipeline_forest", 16067732),
    "lng_terminal": SourceImage("lng_terminal", 24244231),
    "lng_carrier": SourceImage("lng_carrier", 35757999),
    "offshore_platform_top": SourceImage("offshore_platform_top", 15961091),
    "projects_engineers_factory": SourceImage("projects_engineers_factory", 32845690),
    "power_plant": SourceImage("power_plant", 35566200),
    "refinery_day": SourceImage("refinery_day", 15970028),
}


OUTPUTS = [
    OutputImage(
        "home-hero-industrial-oman.jpg",
        "oil_refinery_night",
        (1600, 900),
        focus=(0.62, 0.48),
    ),
    OutputImage(
        "about-engineering-team.jpg",
        "engineers_blueprint",
        (1600, 900),
        focus=(0.54, 0.48),
    ),
    OutputImage(
        "about-office-oman.jpg",
        "engineering_office_team",
        (1200, 900),
        focus=(0.50, 0.48),
    ),
    OutputImage(
        "services-hero.jpg",
        "refinery_day",
        (1600, 900),
        focus=(0.58, 0.48),
    ),
    OutputImage(
        "service-process-engineering.jpg",
        "engineers_drawing",
        (1200, 800),
        focus=(0.53, 0.50),
    ),
    OutputImage(
        "service-technical-safety.jpg",
        "technical_safety_pipes",
        (1200, 800),
        focus=(0.58, 0.48),
    ),
    OutputImage(
        "service-instrumentation-control.jpg",
        "control_room_monitoring",
        (1200, 800),
        focus=(0.50, 0.50),
    ),
    OutputImage(
        "service-piping-plotplan.jpg",
        "saudi_pipeline",
        (1200, 800),
        focus=(0.62, 0.50),
    ),
    OutputImage(
        "service-mechanical-static.jpg",
        "storage_tanks",
        (1200, 800),
        focus=(0.52, 0.52),
    ),
    OutputImage(
        "service-mechanical-rotating.jpg",
        "air_compressor",
        (1200, 800),
        focus=(0.52, 0.50),
    ),
    OutputImage(
        "service-pipeline.jpg",
        "big_pipeline_platform",
        (1200, 800),
        focus=(0.55, 0.50),
    ),
    OutputImage(
        "sectors-hero.jpg",
        "aerial_manufacturing",
        (1600, 900),
        focus=(0.50, 0.52),
    ),
    OutputImage(
        "sectors-oil-gas.jpg",
        "oil_refinery_night",
        (1200, 800),
        focus=(0.58, 0.52),
    ),
    OutputImage(
        "sectors-cryogenic.jpg",
        "lng_terminal",
        (1200, 800),
        focus=(0.50, 0.50),
    ),
    OutputImage(
        "sectors-refining.jpg",
        "refinery_day",
        (1200, 800),
        focus=(0.55, 0.48),
    ),
    OutputImage(
        "sectors-storage.jpg",
        "storage_tanks",
        (1200, 800),
        focus=(0.52, 0.52),
    ),
    OutputImage(
        "sectors-utilities.jpg",
        "power_plant",
        (1200, 800),
        focus=(0.50, 0.48),
    ),
    OutputImage(
        "qhse-compliance.jpg",
        "qhse_site_engineer",
        (1600, 900),
        focus=(0.50, 0.44),
    ),
    OutputImage(
        "projects-capabilities.jpg",
        "projects_engineers_factory",
        (1600, 900),
        focus=(0.50, 0.45),
    ),
    OutputImage(
        "case-lng-optimization.jpg",
        "lng_carrier",
        (1200, 800),
        focus=(0.50, 0.48),
    ),
    OutputImage(
        "case-offshore-safety.jpg",
        "offshore_platform_top",
        (1200, 800),
        focus=(0.54, 0.48),
    ),
    OutputImage(
        "case-refinery-debot.jpg",
        "oil_refinery_night",
        (1200, 800),
        focus=(0.58, 0.52),
    ),
    OutputImage(
        "contact-oman-office.jpg",
        "professional_meeting",
        (1600, 900),
        focus=(0.50, 0.48),
    ),
]


def fetch_image(source: SourceImage) -> Image.Image:
    response = requests.get(source.url, timeout=60)
    response.raise_for_status()
    return Image.open(BytesIO(response.content)).convert("RGB")


def crop_to_focus(
    image: Image.Image,
    target_size: tuple[int, int],
    focus: tuple[float, float],
) -> Image.Image:
    src_w, src_h = image.size
    target_w, target_h = target_size
    target_ratio = target_w / target_h
    src_ratio = src_w / src_h

    if src_ratio > target_ratio:
        crop_h = src_h
        crop_w = round(crop_h * target_ratio)
    else:
        crop_w = src_w
        crop_h = round(crop_w / target_ratio)

    focus_x = int(src_w * focus[0])
    focus_y = int(src_h * focus[1])

    left = max(0, min(focus_x - crop_w // 2, src_w - crop_w))
    top = max(0, min(focus_y - crop_h // 2, src_h - crop_h))

    cropped = image.crop((left, top, left + crop_w, top + crop_h))
    return cropped.resize(target_size, Image.Resampling.LANCZOS)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    cache: dict[str, Image.Image] = {}

    for output in OUTPUTS:
        if output.source not in cache:
            cache[output.source] = fetch_image(SOURCES[output.source])

        processed = crop_to_focus(cache[output.source], output.size, output.focus)
        destination = OUTPUT_DIR / output.filename
        processed.save(
            destination,
            format="JPEG",
            quality=85,
            optimize=True,
            progressive=True,
        )
        print(f"saved {destination.name} {output.size[0]}x{output.size[1]}")


if __name__ == "__main__":
    main()
