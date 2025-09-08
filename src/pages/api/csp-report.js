import fs from 'node:fs';
import path from 'node:path';

export const prerender = false;

export async function POST({ request }) {
  try {
    const violation = await request.json();

    // ログファイルのパス
    const logDir = path.join(process.cwd(), 'public', 'logs');
    const logFile = path.join(logDir, 'csp-violations.log');

    // ログディレクトリが存在しない場合は作成
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    // ログエントリの作成
    const timestamp = new Date().toISOString();
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    const logEntry = `[${timestamp}] IP: ${ip} | UA: ${userAgent.substring(0, 100)} | Violation: ${JSON.stringify(violation)}\n`;

    // ログファイルに追記
    fs.appendFileSync(logFile, logEntry);

    return new Response(JSON.stringify({ status: 'reported' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });

  } catch (error) {
    console.error('CSP Report Error:', error);

    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
