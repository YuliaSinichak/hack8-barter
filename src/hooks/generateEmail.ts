import { iSellingPoint} from '@/types';

export const generateMessage = (name: string, sellingPoints: iSellingPoint[], totalSum: number): string => ` <!DOCTYPE html>
<table
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="max-width: 600px; margin: 0 auto"
  >
    <tr
      style="
        padding: 20px;
        border-radius: 20px;
        color: white;
        background-color: #181619;
      "
    >
      <td
        style="
          padding: 20px 20px;
          display: flex;
          justify-content: space-between;
        "
      >
        <img
          src="https://i.ibb.co/Nm0rS4g/logo-hackathon-02-1-1.png"
          alt="logo"
          style="width: 60%; margin: 0 auto;"
        />
      </td>
    </tr>
  </table>


  <table
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="max-width: 600px; margin: 0 auto; background-color: white"
  >
    <tr>
      <td align="center" style="padding: 20px">
        <h1 style="color: #3BAF0B">Вітаємо, ${name}!</h1>
        <p style="color: #262626">
          Ви на крок ближче до участі в BEST::Hackath0n2024 в ролі партнера!
        </p>
      </td>
    </tr>
    <tr>
      <td style="max-width: 560px; margin: 0 auto">
        <hr style="border: 2px solid #3BAF0B" />
      </td>
    </tr>
  </table>

  <table
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="max-width: 600px; margin: 0 auto; background-color: #fff"
  >
    <tr>
      <td style="padding: 20px">
        <h2 style="color: #3BAF0B;">
          Ваш вибір опцій співпраці виглядає так:
        </h2>
        <table cellpadding="10" cellspacing="0" width="100%">
          <tr>
            <th
              style="text-align: left; background-color: #3BAF0B; color: #fff"
            >
              Назва пакету
            </th>
            <th
              style="
                text-align: right;
                background-color: #3BAF0B;
                color: #fff;
              "
            >
              Вартість
            </th>
          </tr>

          ${sellingPoints.map(sp => `<tr>
  <td style="text-align: left">${sp.name}</td>
  <td style="text-align: right">${sp.price}</td>
</tr>`).join('')}

          <tr>
            <td colspan="2" style="text-align: right; padding-top: 10px">
              Підсумок: ${totalSum}
            </td>
          </tr>
        </table>
  
      </td >
    </tr >
  </table >

  <table
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="max-width: 600px; margin: 0 auto"
  >
    <tr>
      <td style="padding: 20px">
        <p
          style="
            text-align: right;
            margin-top: 20px;
            color: #3BAF0B;
            font-weight: 600;
          "
        >
          До зустрічі на Hackath0n2024!
        </p>
      </td>
    </tr>
  </table>

  <table
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="max-width: 600px; margin: 0 auto"
  >
    <tr>
      <td style="padding: 20px">
        <p style="color: #262626">Марія Зарванська,</p>
        <p style="color: #262626">відповідальна за корпоративні зв’язки</p>

        <p>
          <a style="color: #262626" href="tel:+ 380 99 132 37 49">
           + 380 99 132 37 49
          </a>
        </p>
        <p>
          <a style="color: #262626" href="mailto:mariia.zarvanska@best-eu.org">
             mariia.zarvanska@best-eu.org
          </a>
        </p>
      </td>
      <td style="padding: 20px">
        <p style="color: #262626">Шестак Ілля,</p>
        <p style="color: #262626">відповідальний за корпоративні зв’язки</p>
        <p>
          <a style="color: #262626" href="tel:+ 380 66 665 84 31">
            + 380 66 665 84 31
          </a>
        </p>
        <p>
          <a style="color: #262626" href="mailto:illia.shestak@best-eu.org">
          illia.shestak@best-eu.org
          </a>
        </p>
      </td>
    </tr>
  </table>
`